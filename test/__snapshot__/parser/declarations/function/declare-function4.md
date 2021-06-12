# Kataw parser test case

## Input

`````js
declare function bar(config: Config<{foo: 'a'}>) : void
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
            "declareKeyword": {
                "kind": 82165,
                "flags": 64,
                "start": 0,
                "end": 7
            },
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 7,
                "end": 16
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "bar",
                "rawText": "bar",
                "flags": 96,
                "start": 16,
                "end": 20
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "config",
                            "rawText": "config",
                            "flags": 96,
                            "start": 21,
                            "end": 27
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 144,
                                "id": {
                                    "kind": 134299649,
                                    "text": "Config",
                                    "rawText": "Config",
                                    "flags": 96,
                                    "start": 28,
                                    "end": 35
                                },
                                "typeParameters": {
                                    "kind": 266,
                                    "parameters": [
                                        {
                                            "kind": 267,
                                            "type": {
                                                "kind": 134234353,
                                                "properties": [
                                                    {
                                                        "kind": 193,
                                                        "protoKeyword": null,
                                                        "staticToken": null,
                                                        "getKeyword": null,
                                                        "setKeyword": null,
                                                        "key": {
                                                            "kind": 134299649,
                                                            "text": "foo",
                                                            "rawText": "foo",
                                                            "flags": 96,
                                                            "start": 37,
                                                            "end": 40
                                                        },
                                                        "optionalToken": null,
                                                        "value": {
                                                            "kind": 134217967,
                                                            "value": "a",
                                                            "flags": 0,
                                                            "start": 41,
                                                            "end": 45
                                                        },
                                                        "flags": 0,
                                                        "start": 37,
                                                        "end": 45
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 0,
                                                "start": 36,
                                                "end": 46
                                            },
                                            "flags": 0,
                                            "start": 36,
                                            "end": 46
                                        }
                                    ],
                                    "flags": 0,
                                    "start": 35,
                                    "end": 47
                                },
                                "flags": 0,
                                "start": 28,
                                "end": 47
                            },
                            "flags": 0,
                            "start": 27,
                            "end": 47
                        },
                        "right": null,
                        "flags": 32,
                        "start": 21,
                        "end": 47
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 20,
                "end": 48
            },
            "contents": null,
            "typeParameters": null,
            "returnType": {
                "kind": 139,
                "type": {
                    "kind": 138477615,
                    "flags": 64,
                    "start": 50,
                    "end": 55
                },
                "flags": 0,
                "start": 7,
                "end": 55
            },
            "flags": 4112,
            "start": 7,
            "end": 55
        }
    ],
    "isModule": false,
    "source": "declare function bar(config: Config<{foo: 'a'}>) : void",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 55
}
```

### Printed

```javascript

function bar(config);
```

### Diagnostics

```javascript
✔ No errors
```

