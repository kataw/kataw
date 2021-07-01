# Kataw parser test case

## Input

`````js
a=function<T,S>() {}
`````

## Options

### Parser Options

`````js
{ allowTypes : true }
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
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 1,
                    "end": 2
                },
                "right": {
                    "kind": 177,
                    "asyncKeyword": null,
                    "functionKeyword": {
                        "kind": 37822554,
                        "flags": 64,
                        "start": 2,
                        "end": 10
                    },
                    "asteriskToken": null,
                    "name": null,
                    "typeParameters": {
                        "kind": 307,
                        "declarations": {
                            "kind": 337,
                            "parameters": [
                                {
                                    "kind": 146,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "T",
                                        "rawText": "T",
                                        "flags": 96,
                                        "start": 11,
                                        "end": 12
                                    },
                                    "type": null,
                                    "assignToken": null,
                                    "defaultType": null,
                                    "flags": 2097152,
                                    "start": 11,
                                    "end": 12
                                },
                                {
                                    "kind": 146,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "S",
                                        "rawText": "S",
                                        "flags": 96,
                                        "start": 13,
                                        "end": 14
                                    },
                                    "type": null,
                                    "assignToken": null,
                                    "defaultType": null,
                                    "flags": 2097152,
                                    "start": 13,
                                    "end": 14
                                }
                            ],
                            "trailingComma": false,
                            "flags": 2097152,
                            "start": 11,
                            "end": 14
                        },
                        "flags": 2097152,
                        "start": 10,
                        "end": 15
                    },
                    "formalParameterList": {
                        "kind": 214,
                        "formalParameters": [],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 16,
                        "end": 16
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
                    "start": 2,
                    "end": 20
                },
                "flags": 32,
                "start": 0,
                "end": 20
            },
            "flags": 16,
            "start": 0,
            "end": 20
        }
    ],
    "isModule": false,
    "source": "a=function<T,S>() {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 20
}
```

### Printed

```javascript

a = function <T, S> () {};

```

### Diagnostics

```javascript
✔ No errors
```

