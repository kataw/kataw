# Kataw parser test case

### Printer Options

`````js
{ printWidth: 10 }
`````

### Options

`````js
{ module: true, allowTypes: true }
`````

## Input

`````js
type C = [& { foo: 1 } & { bar: 2 }, & { foo: 3 } & { bar: 4 }];
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
                "text": "C",
                "rawText": "C",
                "flags": 96,
                "transformFlags": 0,
                "start": 4,
                "end": 6
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "transformFlags": 0,
                "start": 6,
                "end": 8
            },
            "type": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 147,
                    "elementTypes": [
                        {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": {
                                "kind": 134252103,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 10,
                                "end": 11
                            },
                            "type": {
                                "kind": 138,
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
                                                    "text": "foo",
                                                    "rawText": "foo",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 13,
                                                    "end": 17
                                                },
                                                "optionalToken": null,
                                                "type": {
                                                    "kind": 139,
                                                    "bitwiseOrToken": null,
                                                    "bitwiseAndToken": null,
                                                    "type": {
                                                        "kind": 134217968,
                                                        "text": 1,
                                                        "rawText": "1",
                                                        "flags": 2097216,
                                                        "transformFlags": 0,
                                                        "start": 18,
                                                        "end": 20
                                                    },
                                                    "flags": 2097152,
                                                    "transformFlags": 0,
                                                    "start": 18,
                                                    "end": 20
                                                },
                                                "flags": 2097152,
                                                "transformFlags": 0,
                                                "start": 13,
                                                "end": 20
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 11,
                                        "end": 22
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
                                                    "text": "bar",
                                                    "rawText": "bar",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 26,
                                                    "end": 30
                                                },
                                                "optionalToken": null,
                                                "type": {
                                                    "kind": 139,
                                                    "bitwiseOrToken": null,
                                                    "bitwiseAndToken": null,
                                                    "type": {
                                                        "kind": 134217968,
                                                        "text": 2,
                                                        "rawText": "2",
                                                        "flags": 2097216,
                                                        "transformFlags": 0,
                                                        "start": 31,
                                                        "end": 33
                                                    },
                                                    "flags": 2097152,
                                                    "transformFlags": 0,
                                                    "start": 31,
                                                    "end": 33
                                                },
                                                "flags": 2097152,
                                                "transformFlags": 0,
                                                "start": 26,
                                                "end": 33
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 24,
                                        "end": 35
                                    }
                                ],
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 22,
                                "end": 35
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 10,
                            "end": 35
                        },
                        {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": {
                                "kind": 134252103,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 36,
                                "end": 38
                            },
                            "type": {
                                "kind": 138,
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
                                                    "text": "foo",
                                                    "rawText": "foo",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 40,
                                                    "end": 44
                                                },
                                                "optionalToken": null,
                                                "type": {
                                                    "kind": 139,
                                                    "bitwiseOrToken": null,
                                                    "bitwiseAndToken": null,
                                                    "type": {
                                                        "kind": 134217968,
                                                        "text": 3,
                                                        "rawText": "3",
                                                        "flags": 2097216,
                                                        "transformFlags": 0,
                                                        "start": 45,
                                                        "end": 47
                                                    },
                                                    "flags": 2097152,
                                                    "transformFlags": 0,
                                                    "start": 45,
                                                    "end": 47
                                                },
                                                "flags": 2097152,
                                                "transformFlags": 0,
                                                "start": 40,
                                                "end": 47
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 38,
                                        "end": 49
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
                                                    "text": "bar",
                                                    "rawText": "bar",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 53,
                                                    "end": 57
                                                },
                                                "optionalToken": null,
                                                "type": {
                                                    "kind": 139,
                                                    "bitwiseOrToken": null,
                                                    "bitwiseAndToken": null,
                                                    "type": {
                                                        "kind": 134217968,
                                                        "text": 4,
                                                        "rawText": "4",
                                                        "flags": 2097216,
                                                        "transformFlags": 0,
                                                        "start": 58,
                                                        "end": 60
                                                    },
                                                    "flags": 2097152,
                                                    "transformFlags": 0,
                                                    "start": 58,
                                                    "end": 60
                                                },
                                                "flags": 2097152,
                                                "transformFlags": 0,
                                                "start": 53,
                                                "end": 60
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 51,
                                        "end": 62
                                    }
                                ],
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 49,
                                "end": 62
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 36,
                            "end": 62
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 63
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 8,
                "end": 63
            },
            "flags": 64,
            "transformFlags": 0,
            "start": 0,
            "end": 64
        }
    ],
    "isModule": true,
    "source": "type C = [& { foo: 1 } & { bar: 2 }, & { foo: 3 } & { bar: 4 }];",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 64
}
```

### Printed

```javascript
type C = [
  & {
    foo: 1
  } & {
    bar: 2
  },
  & {
    foo: 3
  } & {
    bar: 4
  }
]
```

### Diagnostics

```javascript
✔ No errors
```

