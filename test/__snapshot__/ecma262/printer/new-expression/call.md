# Kataw parser test case

## Input

`````js
new (factory())()
new factory()()

new (factory())(factory())

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
                "kind": 210,
                "newKeyword": {
                    "kind": 138477661,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 3
                },
                "expression": {
                    "kind": 121,
                    "expression": {
                        "kind": 131,
                        "expression": {
                            "kind": 134299649,
                            "text": "factory",
                            "rawText": "factory",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 5,
                            "end": 12
                        },
                        "argumentList": {
                            "kind": 256,
                            "elements": [],
                            "trailingComma": false,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 13,
                            "end": 13
                        },
                        "flags": 32,
                        "transformFlags": 1,
                        "start": 3,
                        "end": 14
                    },
                    "flags": 3,
                    "transformFlags": 0,
                    "start": 32,
                    "end": 15
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 16,
                    "end": 16
                },
                "flags": 96,
                "transformFlags": 2048,
                "start": 0,
                "end": 17
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 17
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 210,
                    "newKeyword": {
                        "kind": 138477661,
                        "flags": 97,
                        "transformFlags": 0,
                        "start": 17,
                        "end": 21
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "factory",
                        "rawText": "factory",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 21,
                        "end": 29
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 30,
                        "end": 30
                    },
                    "flags": 97,
                    "transformFlags": 2048,
                    "start": 17,
                    "end": 31
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 32,
                    "end": 32
                },
                "flags": 32,
                "transformFlags": 1,
                "start": 17,
                "end": 33
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 17,
            "end": 33
        },
        {
            "kind": 120,
            "expression": {
                "kind": 210,
                "newKeyword": {
                    "kind": 138477661,
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 33,
                    "end": 38
                },
                "expression": {
                    "kind": 121,
                    "expression": {
                        "kind": 131,
                        "expression": {
                            "kind": 134299649,
                            "text": "factory",
                            "rawText": "factory",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 40,
                            "end": 47
                        },
                        "argumentList": {
                            "kind": 256,
                            "elements": [],
                            "trailingComma": false,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 48,
                            "end": 48
                        },
                        "flags": 32,
                        "transformFlags": 1,
                        "start": 38,
                        "end": 49
                    },
                    "flags": 38,
                    "transformFlags": 0,
                    "start": 32,
                    "end": 50
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 131,
                            "expression": {
                                "kind": 134299649,
                                "text": "factory",
                                "rawText": "factory",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 51,
                                "end": 58
                            },
                            "argumentList": {
                                "kind": 256,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 59,
                                "end": 59
                            },
                            "flags": 32,
                            "transformFlags": 1,
                            "start": 51,
                            "end": 60
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 51,
                    "end": 60
                },
                "flags": 97,
                "transformFlags": 2048,
                "start": 33,
                "end": 61
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 33,
            "end": 61
        }
    ],
    "isModule": false,
    "source": "new (factory())()\nnew factory()()\n\nnew (factory())(factory())\n",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 62
}
```

### Printed

```javascript
new (factory())();
new factory()();

new (factory())(factory());

```

### Diagnostics

```javascript
✔ No errors
```

