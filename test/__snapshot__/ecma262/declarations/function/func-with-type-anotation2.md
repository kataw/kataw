# Kataw parser test case

## Input

`````js
function foo(numVal: any, otherVal: mixed){}
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
                "transformFlags": 0,
                "start": 0,
                "end": 8
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 96,
                "transformFlags": 0,
                "start": 8,
                "end": 12
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "numVal",
                            "rawText": "numVal",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 13,
                            "end": 19
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134234252,
                                "flags": 2097216,
                                "transformFlags": 0,
                                "start": 20,
                                "end": 24
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 20,
                            "end": 24
                        },
                        "right": null,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 13,
                        "end": 24
                    },
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "otherVal",
                            "rawText": "otherVal",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 25,
                            "end": 34
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 144,
                                "typeName": {
                                    "kind": 134299649,
                                    "text": "mixed",
                                    "rawText": "mixed",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 35,
                                    "end": 41
                                },
                                "typeParameters": null,
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 35,
                                "end": 41
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 35,
                            "end": 41
                        },
                        "right": null,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 25,
                        "end": 41
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 13,
                "end": 41
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 43,
                    "end": 43
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 42,
                "end": 44
            },
            "returnType": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 44
        }
    ],
    "isModule": false,
    "source": "function foo(numVal: any, otherVal: mixed){}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 44
}
```

### Printed

```javascript

function foo(numVal: any , otherVal: mixed) {}
```

### Diagnostics

```javascript
✔ No errors
```

