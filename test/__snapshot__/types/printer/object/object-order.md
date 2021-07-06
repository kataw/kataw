# Kataw parser test case

## Input

`````js
type Foo = {
  // a
  alpha: 'hello',

  // b
  [key: string]: void,
  // c

  beta: 10,

  // d
}

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
                                "text": "alpha",
                                "rawText": "alpha",
                                "flags": 97,
                                "transformFlags": 0,
                                "start": 12,
                                "end": 27
                            },
                            "optionalToken": null,
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 134217967,
                                    "text": "hello",
                                    "rawText": "'hello'",
                                    "flags": 6291520,
                                    "transformFlags": 1024,
                                    "start": 28,
                                    "end": 36
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 28,
                                "end": 36
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 12,
                            "end": 37
                        },
                        {
                            "kind": 195,
                            "protoKeyword": null,
                            "staticKeyword": null,
                            "name": {
                                "kind": 134299649,
                                "text": "key",
                                "rawText": "key",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 49,
                                "end": 52
                            },
                            "key": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 134234347,
                                    "flags": 2097216,
                                    "transformFlags": 0,
                                    "start": 53,
                                    "end": 60
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 53,
                                "end": 60
                            },
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 138477615,
                                    "flags": 2097216,
                                    "transformFlags": 0,
                                    "start": 62,
                                    "end": 67
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 62,
                                "end": 67
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 37,
                            "end": 68
                        },
                        {
                            "kind": 193,
                            "protoKeyword": null,
                            "staticKeyword": null,
                            "getKeyword": null,
                            "setKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "beta",
                                "rawText": "beta",
                                "flags": 97,
                                "transformFlags": 0,
                                "start": 68,
                                "end": 83
                            },
                            "optionalToken": null,
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 134217968,
                                    "text": 10,
                                    "rawText": "10",
                                    "flags": 2097216,
                                    "transformFlags": 0,
                                    "start": 84,
                                    "end": 87
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 84,
                                "end": 87
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 68,
                            "end": 88
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 10,
                    "end": 98
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 10,
                "end": 98
            },
            "flags": 64,
            "transformFlags": 0,
            "start": 0,
            "end": 98
        }
    ],
    "isModule": false,
    "source": "type Foo = {\n  // a\n  alpha: 'hello',\n\n  // b\n  [key: string]: void,\n  // c\n\n  beta: 10,\n\n  // d\n}\n",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 99
}
```

### Printed

```javascript

type Foo = { alpha: '\'hello\'', [string]: void, beta: 10 }
```

### Diagnostics

```javascript
✔ No errors
```

