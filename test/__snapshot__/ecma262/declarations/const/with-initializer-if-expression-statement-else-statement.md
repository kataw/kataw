# Kataw parser test case

## Input

`````js
if (true) {} else const x = 1;
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 2
            },
            "expression": {
                "kind": 24752947,
                "flags": 96,
                "transformFlags": 0,
                "start": 4,
                "end": 8
            },
            "consequent": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 11,
                    "end": 11
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 9,
                "end": 12
            },
            "elseKeyword": {
                "kind": 4194389,
                "flags": 64,
                "transformFlags": 0,
                "start": 12,
                "end": 17
            },
            "alternate": {
                "kind": 120,
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "rawText": "",
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 17,
                    "end": 17
                },
                "flags": 16,
                "transformFlags": 4096,
                "start": 17,
                "end": 17
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 17
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 80,
                "transformFlags": 0,
                "start": 17,
                "end": 23
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 23,
                            "end": 25
                        },
                        "type": null,
                        "initializer": {
                            "kind": 201392130,
                            "text": 1,
                            "rawText": "1",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 27,
                            "end": 29
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 23,
                        "end": 29
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 23,
                "end": 29
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 17,
            "end": 30
        }
    ],
    "isModule": false,
    "source": "if (true) {} else const x = 1;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 30
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 17, end: 23

```

