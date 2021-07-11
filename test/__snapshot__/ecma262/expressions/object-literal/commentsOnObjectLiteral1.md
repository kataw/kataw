# Kataw parser test case

## Input

`````js
// @removeComments: false
var Person = makeClass(
   /**
     @scope Person
   */
   {
   }
);
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "start": 0,
                "end": 29
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "Person",
                            "rawText": "Person",
                            "flags": 96,
                            "start": 29,
                            "end": 36
                        },
                        "type": null,
                        "initializer": {
                            "kind": 131,
                            "expression": {
                                "kind": 134299649,
                                "text": "makeClass",
                                "rawText": "makeClass",
                                "flags": 96,
                                "start": 38,
                                "end": 48
                            },
                            "argumentList": {
                                "kind": 256,
                                "elements": [
                                    {
                                        "kind": 220,
                                        "propertyList": {
                                            "kind": 218,
                                            "properties": [],
                                            "trailingComma": false,
                                            "flags": 17,
                                            "start": 86,
                                            "end": 86
                                        },
                                        "flags": 49,
                                        "start": 49,
                                        "end": 91
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 49,
                                "end": 91
                            },
                            "flags": 268435488,
                            "start": 38,
                            "end": 93
                        },
                        "flags": 16,
                        "start": 29,
                        "end": 93
                    }
                ],
                "flags": 16,
                "start": 29,
                "end": 93
            },
            "flags": 16,
            "start": 0,
            "end": 94
        }
    ],
    "isModule": false,
    "source": "// @removeComments: false\nvar Person = makeClass(\n   /**\n     @scope Person\n   */\n   {\n   }\n);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 94
}
```

### Printed

```javascript
// @removeComments: false
var  Person = makeClass( 
 /**
     @scope Person
   */
{} ) ;

```

### Diagnostics

```javascript
✔ No errors
```

