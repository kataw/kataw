# Kataw parser test case

## Input

`````js
const a = 1, a = 2;

const a = 1; const a = 2;
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
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 5,
                            "end": 7
                        },
                        "type": null,
                        "initializer": {
                            "kind": 201392130,
                            "text": 1,
                            "rawText": "1",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 9,
                            "end": 11
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 5,
                        "end": 11
                    },
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 12,
                            "end": 14
                        },
                        "type": null,
                        "initializer": {
                            "kind": 201392130,
                            "text": 2,
                            "rawText": "2",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 16,
                            "end": 18
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 12,
                        "end": 18
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 5,
                "end": 18
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 0,
            "end": 19
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "transformFlags": 0,
                "start": 19,
                "end": 26
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 26,
                            "end": 28
                        },
                        "type": null,
                        "initializer": {
                            "kind": 201392130,
                            "text": 1,
                            "rawText": "1",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 30,
                            "end": 32
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 26,
                        "end": 32
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 26,
                "end": 32
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 19,
            "end": 33
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 80,
                "transformFlags": 0,
                "start": 33,
                "end": 39
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 39,
                            "end": 41
                        },
                        "type": null,
                        "initializer": {
                            "kind": 201392130,
                            "text": 2,
                            "rawText": "2",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 43,
                            "end": 45
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 39,
                        "end": 45
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 39,
                "end": 45
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 33,
            "end": 46
        }
    ],
    "isModule": false,
    "source": "const a = 1, a = 2;\n\nconst a = 1; const a = 2;",
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
✖ Duplicate bindingidentifier 'a' - start: 12, end: 14
✖ Duplicate bindingidentifier 'a' - start: 26, end: 28
✖ Duplicate bindingidentifier 'a' - start: 39, end: 41

```

