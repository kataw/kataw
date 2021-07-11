# Kataw parser test case

## Input

`````js
function bar<T: ?number>() {}
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
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 0,
                "end": 8
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "bar",
                "rawText": "bar",
                "flags": 96,
                "start": 8,
                "end": 12
            },
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
                                "start": 13,
                                "end": 14
                            },
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 134217970,
                                    "nullableToken": {
                                        "kind": 134217750,
                                        "flags": 64,
                                        "start": 15,
                                        "end": 17
                                    },
                                    "type": {
                                        "kind": 134234345,
                                        "flags": 2097216,
                                        "start": 17,
                                        "end": 23
                                    },
                                    "flags": 2097152,
                                    "start": 15,
                                    "end": 23
                                },
                                "flags": 2097152,
                                "start": 15,
                                "end": 23
                            },
                            "assignToken": null,
                            "defaultType": null,
                            "flags": 2097152,
                            "start": 13,
                            "end": 23
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "start": 13,
                    "end": 23
                },
                "flags": 2097152,
                "start": 12,
                "end": 24
            },
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 25,
                "end": 25
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 28,
                    "end": 28
                },
                "flags": 32,
                "start": 26,
                "end": 29
            },
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 29
        }
    ],
    "isModule": false,
    "source": "function bar<T: ?number>() {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 29
}
```

### Printed

```javascript

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  function bar<T: ?number> () {}

```

### Diagnostics

```javascript
✔ No errors
```

