#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import json
import re
import sys

class JSDocGen:
    def __init__( self, apifile, prefix ):
        self.jsonfile = apifile
        self.indent = 0
        self.indentstring = "    "
        jf = open( apifile, "r" )
        self.json = json.load( jf )
        jf.close()
        self.parse( self.json, prefix, True )

    def p( self, str, end=None ):
        indent = self.indentstring * self.indent
        print( indent + str, end=end )

    def getTypeExample( self, type ):
        if type == "string":
            return "''"
        elif type == "boolean" or type == "bool":
            return "true"
        elif type == "Object" or type == "object":
            return "new Object()"
        elif type == "list":
            return "[]"
        elif type == "double":
            return "0.0"
        return "0"   # default to int

    def parseProperty( self, name, obj, isLast ):
        print()
        self.p( "/**" )
        if "description" in obj:
            self.p( " * %s" % obj["description"] )

        if "type" in obj:
            type = obj["type"]
        else:
            type = "undefined"

        if name == name.upper():
            self.p( " * @constant" )
            self.p( " * @final" )

        if "since" in obj:
            self.p( " * @since %s" % obj["since"] )

        self.p( " */" )
        dummyvalue = self.getTypeExample( type )
        self.p( "%s: %s" % ( name, dummyvalue ), end="" )
        if not isLast:
            print( "," )   # we don't want indentation here
        else:
            print()   # we don't want indentation here

    def getJSType( self, type ):
        if type == "string" or type == "String":
            return "String"
        elif type == "bool" or type == "boolean":
            return "bool"
        elif type == "int" or type == "integer":
            return "int"
        elif type == "double":
            return "double"
        elif type == "list" or type == "array":
            return "Array"
        elif type == "method" or type == "function":
            return "Function"
        elif type == "object" or type == "args" or type == "options" or type == "Object" or type == "hash":
            return "Object"
        elif type == "contact":
            return "Titanium.Contacts.Contact"
        print( "WARNING: Type %s may be no valid JavaScript type." % type, file=sys.stderr )
        return type

    def parseMethod( self, name, obj, isLast ):
        print()
        self.p( "/**" )
        if "description" in obj:
            self.p( " * %s" % obj["description"] )

        args = []
        if "arguments" in obj:
            for a in obj["arguments"]:
                self.p( " * @param %s (%s) %s" % ( a["name"], self.getJSType( a["type"] ), a["description"] ) )
                args.append( a["name"] )
        args = ", ".join( args )
        if "returns" in obj and obj["returns"] is not None:
            self.p( " * @return (%s) %s" % ( self.getJSType( obj["returns"]["type"] ), obj["returns"]["description"] ) )
        self.p( " */" )

        self.p( "%s: function(%s) { }" % ( name, args ), end="" )
        #self.p( "}", end="" )
        if not isLast:
            print( "," )   # we don't want indentation here
        else:
            print()   # we don't want indentation here

    def cleanObject( self, obj ):
        for k in [ "deprecated", "description", "name", "object", "platforms", "property", "since", "method", "arguments", "returns" ]:
            if k in obj:
                del obj[k]
        return obj

    def parseObject( self, name, obj, isLast ):
        obj = self.cleanObject( obj )   # remove all properties which do not belong to the object

        if name == "Titanium":
            self.p( "%s = {" % ( name ) )  # root element
        else:
            self.p( "%s: {" % ( name ) )

        self.indent += 1
        subitems = len( obj )
        ctr = 0
        for subname, sub in obj.items():
            ctr += 1
            lastone = False
            if ( ctr == subitems ):
                lastone = True
            self.parse( sub, subname, lastone )
        self.indent -= 1
        self.p( "}", end="" )
        if isLast and self.indent == 0:
            print( ";" )   # we don't want indentation here
            print( "Ti = Titanium;" )    # copy object to alias
        elif not isLast:
            print( "," )   # we don't want indentation here
        else:
            print()   # do newline only

    def parse( self, jsonobj, name, isLast ):
        if "property" in jsonobj or "method" in jsonobj and not "object" in jsonobj:
            if "property" in jsonobj and jsonobj["property"]:
                # Property / Constant
                self.parseProperty( name, jsonobj, isLast )
            elif "method" in jsonobj and jsonobj["method"]:
                # Function / Method
                self.parseMethod( name, jsonobj, isLast )
            else:
                print( "!!! UNKNOWN TYPE for %s !!!" % name, file=sys.stderr )
        else:
            # Object
            self.parseObject( name, jsonobj, isLast )


if __name__=="__main__":
    jsd = JSDocGen( "apicoverage.json", "Titanium" )
