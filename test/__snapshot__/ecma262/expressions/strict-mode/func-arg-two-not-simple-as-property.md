# Kataw parser test case

## Input

`````js
({x:function(x, y){"use strict";}})
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 219,
                                "asteriskToken": null,
                                "left": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 2,
                                    "end": 3
                                },
                                "right": {
                                    "kind": 177,
                                    "asyncKeyword": null,
                                    "functionKeyword": {
                                        "kind": 37822554,
                                        "flags": 64,
                                        "start": 4,
                                        "end": 12
                                    },
                                    "asteriskToken": null,
                                    "name": null,
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [
                                            {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 13,
                                                "end": 14
                                            },
                                            {
                                                "kind": 134299649,
                                                "text": "y",
                                                "rawText": "y",
                                                "flags": 96,
                                                "start": 15,
                                                "end": 17
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 13,
                                        "end": 17
                                    },
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [
                                                {
                                                    "kind": 201392131,
                                                    "text": "use strict",
                                                    "rawText": "\"use strict\"",
                                                    "flags": 96,
                                                    "start": 19,
                                                    "end": 31
                                                }
                                            ],
                                            "statements": [],
                                            "flags": 32,
                                            "start": 19,
                                            "end": 32
                                        },
                                        "flags": 32,
                                        "start": 18,
                                        "end": 33
                                    },
                                    "returnType": null,
                                    "flags": 32,
                                    "start": 4,
                                    "end": 33
                                },
                                "flags": 32,
                                "start": 2,
                                "end": 33
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 2,
                        "end": 33
                    },
                    "flags": 48,
                    "start": 1,
                    "end": 34
                },
                "flags": 32,
                "start": 0,
                "end": 35
            },
            "flags": 16,
            "start": 0,
            "end": 35
        }
    ],
    "isModule": false,
    "source": "({x:function(x, y){\"use strict\";}})",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 35
}
```

### Printed

```javascript

({ x : function (x, y) {
  '"use strict"';
   } });

```

### Diagnostics

```javascript
✔ No errors
```

