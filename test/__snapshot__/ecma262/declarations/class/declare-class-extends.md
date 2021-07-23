# Kataw parser test case

## Input

`````js
declare class A<T> extends B<T> { x: number }
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
            "kind": 178,
            "declareKeyword": {
                "kind": 82165,
                "flags": 64,
                "transformFlags": 0,
                "start": 0,
                "end": 7
            },
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 13
            },
            "name": {
                "kind": 134299649,
                "text": "A",
                "rawText": "A",
                "flags": 96,
                "transformFlags": 0,
                "start": 13,
                "end": 15
            },
            "typeParameters": {
                "kind": 307,
                "declarations": [
                    {
                        "kind": 146,
                        "name": {
                            "kind": 134299649,
                            "text": "T",
                            "rawText": "T",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 16,
                            "end": 17
                        },
                        "type": null,
                        "assignToken": null,
                        "defaultType": null,
                        "flags": 2097152,
                        "transformFlags": 0,
                        "start": 16,
                        "end": 17
                    }
                ],
                "trailingComma": false,
                "flags": 2097152,
                "transformFlags": 512,
                "start": 16,
                "end": 17
            },
            "tail": {
                "kind": 277,
                "classHeritage": {
                    "kind": 279,
                    "extendsKeyword": {
                        "kind": 4194391,
                        "flags": 80,
                        "transformFlags": 0,
                        "start": 18,
                        "end": 26
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "B",
                        "rawText": "B",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 26,
                        "end": 28
                    },
                    "typeParameter": {
                        "kind": 310,
                        "types": [
                            {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 144,
                                    "typeName": {
                                        "kind": 134299649,
                                        "text": "T",
                                        "rawText": "T",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 29,
                                        "end": 30
                                    },
                                    "typeParameters": null,
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 29,
                                    "end": 30
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 29,
                                "end": 30
                            }
                        ],
                        "trailingComma": false,
                        "flags": 2097152,
                        "transformFlags": 512,
                        "start": 29,
                        "end": 30
                    },
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 26,
                    "end": 31
                },
                "body": {
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
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 33,
                                "end": 35
                            },
                            "optionalToken": null,
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 134234345,
                                    "flags": 2097216,
                                    "transformFlags": 0,
                                    "start": 36,
                                    "end": 43
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 36,
                                "end": 43
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 33,
                            "end": 43
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 31,
                    "end": 45
                },
                "flags": 4128,
                "transformFlags": 0,
                "start": 18,
                "end": 45
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 45
        }
    ],
    "isModule": false,
    "source": "declare class A<T> extends B<T> { x: number }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 45
}
```

### Printed

```javascript
declare class A  extends B<T> { x: number }
```

### Diagnostics

```javascript
✔ No errors
```

