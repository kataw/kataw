# Kataw parser test case

## Input

`````js
type Foo = Promise<
  { ok: true, bar: string, baz: SomeOtherLongType } |
  { ok: false, bar: SomeOtherLongType }
>;
`````

## Options

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
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "transformFlags": 0,
                "start": 0,
                "end": 4
            },
            "name": {
                "kind": 134299649,
                "text": "Foo",
                "rawText": "Foo",
                "flags": 96,
                "transformFlags": 0,
                "start": 4,
                "end": 8
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "transformFlags": 0,
                "start": 8,
                "end": 10
            },
            "type": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 144,
                    "typeName": {
                        "kind": 134299649,
                        "text": "Promise",
                        "rawText": "Promise",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 10,
                        "end": 18
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
                                        "kind": 137,
                                        "types": [
                                            {
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
                                                            "text": "ok",
                                                            "rawText": "ok",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 23,
                                                            "end": 26
                                                        },
                                                        "optionalToken": null,
                                                        "type": {
                                                            "kind": 139,
                                                            "bitwiseOrToken": null,
                                                            "bitwiseAndToken": null,
                                                            "type": {
                                                                "kind": 24752947,
                                                                "flags": 2097216,
                                                                "transformFlags": 0,
                                                                "start": 27,
                                                                "end": 32
                                                            },
                                                            "flags": 2097152,
                                                            "transformFlags": 0,
                                                            "start": 27,
                                                            "end": 32
                                                        },
                                                        "flags": 2097152,
                                                        "transformFlags": 0,
                                                        "start": 23,
                                                        "end": 33
                                                    },
                                                    {
                                                        "kind": 193,
                                                        "protoKeyword": null,
                                                        "staticKeyword": null,
                                                        "getKeyword": null,
                                                        "setKeyword": null,
                                                        "key": {
                                                            "kind": 134299649,
                                                            "text": "bar",
                                                            "rawText": "bar",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 33,
                                                            "end": 37
                                                        },
                                                        "optionalToken": null,
                                                        "type": {
                                                            "kind": 139,
                                                            "bitwiseOrToken": null,
                                                            "bitwiseAndToken": null,
                                                            "type": {
                                                                "kind": 134234347,
                                                                "flags": 2097216,
                                                                "transformFlags": 0,
                                                                "start": 38,
                                                                "end": 45
                                                            },
                                                            "flags": 2097152,
                                                            "transformFlags": 0,
                                                            "start": 38,
                                                            "end": 45
                                                        },
                                                        "flags": 2097152,
                                                        "transformFlags": 0,
                                                        "start": 33,
                                                        "end": 46
                                                    },
                                                    {
                                                        "kind": 193,
                                                        "protoKeyword": null,
                                                        "staticKeyword": null,
                                                        "getKeyword": null,
                                                        "setKeyword": null,
                                                        "key": {
                                                            "kind": 134299649,
                                                            "text": "baz",
                                                            "rawText": "baz",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 46,
                                                            "end": 50
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
                                                                    "text": "SomeOtherLongType",
                                                                    "rawText": "SomeOtherLongType",
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 51,
                                                                    "end": 69
                                                                },
                                                                "typeParameters": null,
                                                                "flags": 2097152,
                                                                "transformFlags": 0,
                                                                "start": 51,
                                                                "end": 69
                                                            },
                                                            "flags": 2097152,
                                                            "transformFlags": 0,
                                                            "start": 51,
                                                            "end": 69
                                                        },
                                                        "flags": 2097152,
                                                        "transformFlags": 0,
                                                        "start": 46,
                                                        "end": 69
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 2097153,
                                                "transformFlags": 0,
                                                "start": 19,
                                                "end": 71
                                            },
                                            {
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
                                                            "text": "ok",
                                                            "rawText": "ok",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 77,
                                                            "end": 80
                                                        },
                                                        "optionalToken": null,
                                                        "type": {
                                                            "kind": 139,
                                                            "bitwiseOrToken": null,
                                                            "bitwiseAndToken": null,
                                                            "type": {
                                                                "kind": 205586437,
                                                                "flags": 2097216,
                                                                "transformFlags": 0,
                                                                "start": 81,
                                                                "end": 87
                                                            },
                                                            "flags": 2097152,
                                                            "transformFlags": 0,
                                                            "start": 81,
                                                            "end": 87
                                                        },
                                                        "flags": 2097152,
                                                        "transformFlags": 0,
                                                        "start": 77,
                                                        "end": 88
                                                    },
                                                    {
                                                        "kind": 193,
                                                        "protoKeyword": null,
                                                        "staticKeyword": null,
                                                        "getKeyword": null,
                                                        "setKeyword": null,
                                                        "key": {
                                                            "kind": 134299649,
                                                            "text": "bar",
                                                            "rawText": "bar",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 88,
                                                            "end": 92
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
                                                                    "text": "SomeOtherLongType",
                                                                    "rawText": "SomeOtherLongType",
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 93,
                                                                    "end": 111
                                                                },
                                                                "typeParameters": null,
                                                                "flags": 2097152,
                                                                "transformFlags": 0,
                                                                "start": 93,
                                                                "end": 111
                                                            },
                                                            "flags": 2097152,
                                                            "transformFlags": 0,
                                                            "start": 93,
                                                            "end": 111
                                                        },
                                                        "flags": 2097152,
                                                        "transformFlags": 0,
                                                        "start": 88,
                                                        "end": 111
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 2097153,
                                                "transformFlags": 0,
                                                "start": 73,
                                                "end": 113
                                            }
                                        ],
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 71,
                                        "end": 113
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 19,
                                    "end": 113
                                }
                            ],
                            "trailingComma": false,
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 19,
                            "end": 113
                        },
                        "flags": 2097152,
                        "transformFlags": 512,
                        "start": 18,
                        "end": 115
                    },
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 10,
                    "end": 115
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 10,
                "end": 115
            },
            "flags": 64,
            "transformFlags": 0,
            "start": 0,
            "end": 116
        }
    ],
    "isModule": false,
    "source": "type Foo = Promise<\n  { ok: true, bar: string, baz: SomeOtherLongType } |\n  { ok: false, bar: SomeOtherLongType }\n>;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 116
}
```

### Printed

```javascript

type Foo = Promise<{ ok: true ,
    bar: string ,
    baz: SomeOtherLongType } | { ok: false ,
    bar: SomeOtherLongType }>
```

### Diagnostics

```javascript
✔ No errors
```

