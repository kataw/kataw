# Kataw parser test case

## Input

`````js
({[x]: function() {}});

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
                                    "kind": 194,
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 3,
                                        "end": 4
                                    },
                                    "flags": 32,
                                    "start": 2,
                                    "end": 5
                                },
                                "right": {
                                    "kind": 177,
                                    "asyncKeyword": null,
                                    "functionKeyword": {
                                        "kind": 37822554,
                                        "flags": 64,
                                        "start": 6,
                                        "end": 15
                                    },
                                    "asteriskToken": null,
                                    "name": null,
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 15,
                                        "end": 17
                                    },
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "start": 19,
                                            "end": 19
                                        },
                                        "flags": 32,
                                        "start": 17,
                                        "end": 20
                                    },
                                    "returnType": null,
                                    "flags": 32,
                                    "start": 6,
                                    "end": 20
                                },
                                "flags": 32,
                                "start": 2,
                                "end": 20
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 2,
                        "end": 20
                    },
                    "flags": 48,
                    "start": 1,
                    "end": 21
                },
                "flags": 32,
                "start": 0,
                "end": 22
            },
            "flags": 16,
            "start": 0,
            "end": 23
        }
    ],
    "isModule": false,
    "source": "({[x]: function() {}});\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 24
}
```

### Printed

```javascript

 ({  : function () {
    } }); 
```

### Diagnostics

```javascript
✔ No errors
```

