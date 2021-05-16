# Kataw parser test case

## Input

`````js
var x = ({ a } : any = 'foo') => {}

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
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 0,
                "start": 0,
                "end": 3
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 3,
                            "end": 5
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 0,
                                "start": 29,
                                "end": 32
                            },
                            "typeParameters": null,
                            "parameters": [
                                {
                                    "kind": 215,
                                    "ellipsisToken": null,
                                    "binding": {
                                        "kind": 220,
                                        "propertyList": {
                                            "kind": 218,
                                            "properties": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "a",
                                                    "rawText": "a",
                                                    "flags": 96,
                                                    "start": 10,
                                                    "end": 12
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 16,
                                            "start": 10,
                                            "end": 12
                                        },
                                        "flags": 48,
                                        "start": 9,
                                        "end": 14
                                    },
                                    "optionalToken": null,
                                    "type": {
                                        "kind": 139,
                                        "type": {
                                            "kind": 134234252,
                                            "flags": 64,
                                            "start": 16,
                                            "end": 20
                                        },
                                        "flags": 0,
                                        "start": 14,
                                        "end": 20
                                    },
                                    "initializer": {
                                        "kind": 201392131,
                                        "text": "foo",
                                        "rawText": "'foo'",
                                        "flags": 4194400,
                                        "start": 22,
                                        "end": 28
                                    },
                                    "flags": 32,
                                    "start": 7,
                                    "end": 28
                                }
                            ],
                            "asyncKeyword": null,
                            "returnType": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 34,
                                    "end": 34
                                },
                                "flags": 32,
                                "start": 32,
                                "end": 35
                            },
                            "flags": 34,
                            "start": 7,
                            "end": 35
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 35
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 35
            },
            "flags": 16,
            "start": 0,
            "end": 35
        }
    ],
    "isModule": false,
    "source": "var x = ({ a } : any = 'foo') => {}\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 36
}
```

### Printed

```javascript

var x = ({ a } = "'foo'") =>  {};
```

### Diagnostics

```javascript
✔ No errors
```

