# Kataw parser test case

## Input

`````js
const obj = {
  foo = 123,
  bar: x = 123,
} = { foo: 24, bar: 45 };
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 5
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "obj",
                            "rawText": "obj",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 5,
                            "end": 9
                        },
                        "type": null,
                        "initializer": {
                            "kind": 125,
                            "left": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [
                                        {
                                            "kind": 301,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "foo",
                                                "rawText": "foo",
                                                "flags": 97,
                                                "transformFlags": 0,
                                                "start": 13,
                                                "end": 19
                                            },
                                            "right": {
                                                "kind": 201392130,
                                                "text": 123,
                                                "rawText": "123",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 21,
                                                "end": 25
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 13,
                                            "end": 25
                                        },
                                        {
                                            "kind": 219,
                                            "asteriskToken": null,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "bar",
                                                "rawText": "bar",
                                                "flags": 97,
                                                "transformFlags": 0,
                                                "start": 26,
                                                "end": 32
                                            },
                                            "right": {
                                                "kind": 125,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 33,
                                                    "end": 35
                                                },
                                                "operatorToken": {
                                                    "kind": 4125,
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 35,
                                                    "end": 37
                                                },
                                                "right": {
                                                    "kind": 201392130,
                                                    "text": 123,
                                                    "rawText": "123",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 37,
                                                    "end": 41
                                                },
                                                "flags": 0,
                                                "transformFlags": 128,
                                                "start": 26,
                                                "end": 41
                                            },
                                            "flags": 33,
                                            "transformFlags": 128,
                                            "start": 26,
                                            "end": 41
                                        }
                                    ],
                                    "trailingComma": true,
                                    "flags": 17,
                                    "transformFlags": 0,
                                    "start": 13,
                                    "end": 42
                                },
                                "flags": 49,
                                "transformFlags": 8,
                                "start": 11,
                                "end": 44
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 44,
                                "end": 46
                            },
                            "right": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [
                                        {
                                            "kind": 219,
                                            "asteriskToken": null,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "foo",
                                                "rawText": "foo",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 48,
                                                "end": 52
                                            },
                                            "right": {
                                                "kind": 201392130,
                                                "text": 24,
                                                "rawText": "24",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 53,
                                                "end": 56
                                            },
                                            "flags": 32,
                                            "transformFlags": 128,
                                            "start": 48,
                                            "end": 56
                                        },
                                        {
                                            "kind": 219,
                                            "asteriskToken": null,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "bar",
                                                "rawText": "bar",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 57,
                                                "end": 61
                                            },
                                            "right": {
                                                "kind": 201392130,
                                                "text": 45,
                                                "rawText": "45",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 62,
                                                "end": 65
                                            },
                                            "flags": 32,
                                            "transformFlags": 128,
                                            "start": 57,
                                            "end": 65
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 48,
                                    "end": 65
                                },
                                "flags": 48,
                                "transformFlags": 8,
                                "start": 46,
                                "end": 67
                            },
                            "flags": 32,
                            "transformFlags": 128,
                            "start": 11,
                            "end": 67
                        },
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 5,
                        "end": 67
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 5,
                "end": 67
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 0,
            "end": 68
        }
    ],
    "isModule": false,
    "source": "const obj = {\n  foo = 123,\n  bar: x = 123,\n} = { foo: 24, bar: 45 };",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 68
}
```

### Printed

```javascript

const obj = { foo = 123, bar: x = 123 } = { foo: 24, bar: 45 };
```

### Diagnostics

```javascript
✔ No errors
```

