# Kataw parser test case

## Input

`````js
([(x().foo)]) => x;

({[foo]: bar()}) => baz;

`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [
                        {
                            "kind": 201,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 121,
                                        "expression": {
                                            "kind": 129,
                                            "member": {
                                                "kind": 131,
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 3,
                                                    "end": 4
                                                },
                                                "argumentList": {
                                                    "kind": 256,
                                                    "elements": [],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 5,
                                                    "end": 5
                                                },
                                                "flags": 268435488,
                                                "transformFlags": 1,
                                                "start": 2,
                                                "end": 6
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "foo",
                                                "rawText": "foo",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 7,
                                                "end": 10
                                            },
                                            "flags": 268435488,
                                            "transformFlags": 2,
                                            "start": 2,
                                            "end": 10
                                        },
                                        "flags": 2,
                                        "transformFlags": 0,
                                        "start": 32,
                                        "end": 11
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 2,
                                "end": 11
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 1,
                            "end": 12
                        }
                    ],
                    "trailingComma": false,
                    "flags": 34,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 13
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 13,
                    "end": 16
                },
                "contents": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 16,
                    "end": 18
                },
                "flags": 34,
                "transformFlags": 0,
                "start": 0,
                "end": 18
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 19
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [
                        {
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [
                                    {
                                        "kind": 329,
                                        "key": {
                                            "kind": 194,
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "foo",
                                                "rawText": "foo",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 24,
                                                "end": 27
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 23,
                                            "end": 28
                                        },
                                        "value": {
                                            "kind": 131,
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "bar",
                                                "rawText": "bar",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 29,
                                                "end": 33
                                            },
                                            "argumentList": {
                                                "kind": 256,
                                                "elements": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 34,
                                                "end": 34
                                            },
                                            "flags": 268435488,
                                            "transformFlags": 1,
                                            "start": 23,
                                            "end": 35
                                        },
                                        "initializer": null,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 23,
                                        "end": 35
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 23,
                                "end": 35
                            },
                            "flags": 48,
                            "transformFlags": 0,
                            "start": 22,
                            "end": 36
                        }
                    ],
                    "trailingComma": false,
                    "flags": 35,
                    "transformFlags": 0,
                    "start": 22,
                    "end": 37
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 37,
                    "end": 40
                },
                "contents": {
                    "kind": 134299649,
                    "text": "baz",
                    "rawText": "baz",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 40,
                    "end": 44
                },
                "flags": 35,
                "transformFlags": 0,
                "start": 19,
                "end": 44
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 19,
            "end": 45
        }
    ],
    "isModule": false,
    "source": "([(x().foo)]) => x;\n\n({[foo]: bar()}) => baz;\n",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 46
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The left hand side of the arrow is not destructible  - start: 13, end: 16
✖ The left hand side of the arrow is not destructible  - start: 37, end: 40

```

