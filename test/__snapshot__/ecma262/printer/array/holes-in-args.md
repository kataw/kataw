# Kataw parser test case

## Input

`````js
new Test()
  .test()
  .test([, 0])
  .test();
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
                "kind": 131,
                "expression": {
                    "kind": 129,
                    "member": {
                        "kind": 131,
                        "expression": {
                            "kind": 129,
                            "member": {
                                "kind": 131,
                                "expression": {
                                    "kind": 129,
                                    "member": {
                                        "kind": 210,
                                        "newKeyword": {
                                            "kind": 138477661,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 0,
                                            "end": 3
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "Test",
                                            "rawText": "Test",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 3,
                                            "end": 8
                                        },
                                        "argumentList": {
                                            "kind": 256,
                                            "elements": [],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 9,
                                            "end": 9
                                        },
                                        "flags": 96,
                                        "transformFlags": 2048,
                                        "start": 0,
                                        "end": 10
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "test",
                                        "rawText": "test",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 14,
                                        "end": 18
                                    },
                                    "flags": 96,
                                    "transformFlags": 2,
                                    "start": 0,
                                    "end": 18
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 19,
                                    "end": 19
                                },
                                "flags": 32,
                                "transformFlags": 1,
                                "start": 0,
                                "end": 20
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "test",
                                "rawText": "test",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 24,
                                "end": 28
                            },
                            "flags": 32,
                            "transformFlags": 2,
                            "start": 0,
                            "end": 28
                        },
                        "argumentList": {
                            "kind": 256,
                            "elements": [
                                {
                                    "kind": 119,
                                    "elementList": {
                                        "kind": 270,
                                        "elements": [
                                            {
                                                "kind": 230,
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 30,
                                                "end": 30
                                            },
                                            {
                                                "kind": 201392130,
                                                "text": 0,
                                                "rawText": "0",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 31,
                                                "end": 33
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 30,
                                        "end": 33
                                    },
                                    "flags": 32,
                                    "transformFlags": 8,
                                    "start": 29,
                                    "end": 34
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 29,
                            "end": 34
                        },
                        "flags": 32,
                        "transformFlags": 1,
                        "start": 0,
                        "end": 35
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "test",
                        "rawText": "test",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 39,
                        "end": 43
                    },
                    "flags": 32,
                    "transformFlags": 2,
                    "start": 0,
                    "end": 43
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 44,
                    "end": 44
                },
                "flags": 32,
                "transformFlags": 1,
                "start": 0,
                "end": 45
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 46
        }
    ],
    "isModule": false,
    "source": "new Test()\n  .test()\n  .test([, 0])\n  .test();",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 46
}
```

### Printed

```javascript
new Test().test().test([, 0]).test();
```

### Diagnostics

```javascript
✔ No errors
```

