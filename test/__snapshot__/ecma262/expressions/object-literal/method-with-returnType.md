# Kataw parser test case

## Input

`````js
a={get fooProp():number{}}
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
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 351,
                                "asyncKeyword": null,
                                "asteriskToken": null,
                                "getKeyword": {
                                    "kind": 16498,
                                    "flags": 96,
                                    "start": 3,
                                    "end": 6
                                },
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "fooProp",
                                        "rawText": "fooProp",
                                        "flags": 96,
                                        "start": 6,
                                        "end": 14
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 1056,
                                        "start": 15,
                                        "end": 16
                                    },
                                    "returnType": {
                                        "kind": 139,
                                        "bitwiseOrToken": null,
                                        "bitwiseAndToken": null,
                                        "type": {
                                            "kind": 134234345,
                                            "flags": 2097216,
                                            "start": 17,
                                            "end": 23
                                        },
                                        "flags": 2097152,
                                        "start": 17,
                                        "end": 23
                                    },
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "start": 24,
                                            "end": 24
                                        },
                                        "flags": 32,
                                        "start": 23,
                                        "end": 25
                                    },
                                    "flags": 1056,
                                    "start": 14,
                                    "end": 25
                                },
                                "flags": 32,
                                "start": 3,
                                "end": 25
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 3,
                        "end": 25
                    },
                    "flags": 48,
                    "start": 2,
                    "end": 26
                },
                "flags": 32,
                "start": 0,
                "end": 26
            },
            "flags": 16,
            "start": 0,
            "end": 26
        }
    ],
    "isModule": false,
    "source": "a={get fooProp():number{}}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 26
}
```

### Printed

```javascript

a = { get fooProp(): number { } };

```

### Diagnostics

```javascript
✔ No errors
```

