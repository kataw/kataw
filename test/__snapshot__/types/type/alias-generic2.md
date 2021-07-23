# Kataw parser test case

## Input

`````js
type MyObject<A, B, C> = {
  foo: A,
  bar: B,
  baz: C,
};
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
                "text": "MyObject",
                "rawText": "MyObject",
                "flags": 96,
                "transformFlags": 0,
                "start": 4,
                "end": 13
            },
            "typeParameters": {
                "kind": 307,
                "declarations": [
                    {
                        "kind": 146,
                        "name": {
                            "kind": 134299649,
                            "text": "A",
                            "rawText": "A",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 14,
                            "end": 15
                        },
                        "type": null,
                        "assignToken": null,
                        "defaultType": null,
                        "flags": 2097152,
                        "transformFlags": 0,
                        "start": 14,
                        "end": 15
                    },
                    {
                        "kind": 146,
                        "name": {
                            "kind": 134299649,
                            "text": "B",
                            "rawText": "B",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 16,
                            "end": 18
                        },
                        "type": null,
                        "assignToken": null,
                        "defaultType": null,
                        "flags": 2097152,
                        "transformFlags": 0,
                        "start": 16,
                        "end": 18
                    },
                    {
                        "kind": 146,
                        "name": {
                            "kind": 134299649,
                            "text": "C",
                            "rawText": "C",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 19,
                            "end": 21
                        },
                        "type": null,
                        "assignToken": null,
                        "defaultType": null,
                        "flags": 2097152,
                        "transformFlags": 0,
                        "start": 19,
                        "end": 21
                    }
                ],
                "trailingComma": false,
                "flags": 2097152,
                "transformFlags": 512,
                "start": 14,
                "end": 21
            },
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "transformFlags": 0,
                "start": 22,
                "end": 24
            },
            "type": {
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
                                "flags": 97,
                                "transformFlags": 0,
                                "start": 26,
                                "end": 32
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
                                        "text": "A",
                                        "rawText": "A",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 33,
                                        "end": 35
                                    },
                                    "typeParameters": null,
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 33,
                                    "end": 35
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 33,
                                "end": 35
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 26,
                            "end": 36
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
                                "flags": 97,
                                "transformFlags": 0,
                                "start": 36,
                                "end": 42
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
                                        "text": "B",
                                        "rawText": "B",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 43,
                                        "end": 45
                                    },
                                    "typeParameters": null,
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 43,
                                    "end": 45
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 43,
                                "end": 45
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 36,
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
                                "flags": 97,
                                "transformFlags": 0,
                                "start": 46,
                                "end": 52
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
                                        "text": "C",
                                        "rawText": "C",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 53,
                                        "end": 55
                                    },
                                    "typeParameters": null,
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 53,
                                    "end": 55
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 53,
                                "end": 55
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 46,
                            "end": 56
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 24,
                    "end": 58
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 24,
                "end": 58
            },
            "flags": 64,
            "transformFlags": 0,
            "start": 0,
            "end": 59
        }
    ],
    "isModule": false,
    "source": "type MyObject<A, B, C> = {\n  foo: A,\n  bar: B,\n  baz: C,\n};",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 59
}
```

### Printed

```javascript
type MyObject = { foo: A, bar: B, baz: C }
```

### Diagnostics

```javascript
✔ No errors
```

