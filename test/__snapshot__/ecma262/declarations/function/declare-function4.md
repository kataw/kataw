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
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "bar",
                "rawText": "bar",
                "flags": 96,
                "start": 16,
                "end": 20
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
                            "text": "config",
                            "rawText": "config",
                            "flags": 96,
                            "start": 21,
                            "end": 27
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
                                    "text": "Config",
                                    "rawText": "Config",
                                    "flags": 96,
                                    "start": 28,
                                    "end": 35
                                },
                                "typeParameters": {
                                    "kind": 310,
                                    "typeInstantiations": {
                                        "kind": 309,
                                        "types": [
                                            {
                                                "kind": 139,
                                                "bitwiseOrToken": null,
                                                "bitwiseAndToken": null,
                                                "type": {
                                                    "kind": 134234353,
                                                    "properties": [
                                                        {
                                                            "kind": 193,
                                                            "protoKeyword": null,
                                                            "staticKeyword": null,
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
                                                            "type": {
                                                                "kind": 139,
                                                                "bitwiseOrToken": null,
                                                                "bitwiseAndToken": null,
                                                                "type": {
                                                                    "kind": 134217967,
                                                                    "text": "a",
                                                                    "rawText": "'a'",
                                                                    "flags": 6291520,
                                                                    "start": 41,
                                                                    "end": 45
                                                                },
                                                                "flags": 2097152,
                                                                "start": 41,
                                                                "end": 45
                                                            },
                                                            "flags": 2097152,
                                                            "start": 37,
                                                            "end": 45
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 2097152,
                                                    "start": 36,
                                                    "end": 46
                                                },
                                                "flags": 2097152,
                                                "start": 36,
                                                "end": 46
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 2097152,
                                        "start": 36,
                                        "end": 46
                                    },
                                    "flags": 2097152,
                                    "start": 35,
                                    "end": 47
                                },
                                "flags": 2097152,
                                "start": 28,
                                "end": 47
                            },
                            "flags": 2097152,
                            "start": 28,
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
                "start": 21,
                "end": 47
            },
            "contents": null,
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 138477615,
                    "flags": 2097216,
                    "start": 50,
                    "end": 55
                },
                "flags": 2097152,
                "start": 50,
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

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  declare function bar(config: Config<{ foo: "'a'" }>): void 

```

### Diagnostics

```javascript
✔ No errors
```

