# Kataw parser test case

## Input

`````js
for (;false;) const x = 1;
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 3
            },
            "initializer": null,
            "condition": null,
            "incrementor": {
                "kind": 205586437,
                "flags": 96,
                "transformFlags": 0,
                "start": 6,
                "end": 11
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "rawText": "",
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 13,
                    "end": 13
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 13,
                "end": 13
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 13
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 80,
                "transformFlags": 0,
                "start": 13,
                "end": 19
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
                            "start": 19,
                            "end": 21
                        },
                        "type": null,
                        "initializer": {
                            "kind": 201392130,
                            "text": 1,
                            "rawText": "1",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 23,
                            "end": 25
                        },
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 19,
                        "end": 25
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 19,
                "end": 25
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 13,
            "end": 26
        }
    ],
    "isModule": false,
    "source": "for (;false;) const x = 1;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 26
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 13, end: 19

```

