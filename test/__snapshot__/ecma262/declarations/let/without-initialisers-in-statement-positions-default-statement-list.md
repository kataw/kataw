# Kataw parser test case

## Input

`````js
switch (true) { default: let x; }
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 160,
            "switchKeyword": {
                "kind": 37757024,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 6
            },
            "expression": {
                "kind": 24752947,
                "flags": 96,
                "transformFlags": 0,
                "start": 8,
                "end": 12
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [
                    {
                        "kind": 170,
                        "defaultKeyword": {
                            "kind": 4194387,
                            "flags": 80,
                            "transformFlags": 0,
                            "start": 15,
                            "end": 23
                        },
                        "colonToken": {
                            "kind": 21,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 23,
                            "end": 24
                        },
                        "statements": [
                            {
                                "kind": 162,
                                "lexicalKeyword": {
                                    "kind": 41951307,
                                    "flags": 80,
                                    "transformFlags": 0,
                                    "start": 24,
                                    "end": 28
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
                                                "start": 28,
                                                "end": 30
                                            },
                                            "type": null,
                                            "initializer": null,
                                            "flags": 16,
                                            "transformFlags": 4224,
                                            "start": 28,
                                            "end": 30
                                        }
                                    ],
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 28,
                                    "end": 30
                                },
                                "flags": 33554448,
                                "transformFlags": 0,
                                "start": 24,
                                "end": 31
                            }
                        ],
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 15,
                        "end": 31
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 15,
                "end": 31
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 33
        }
    ],
    "isModule": false,
    "source": "switch (true) { default: let x; }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 33
}
```

### Printed

```javascript
switch (true) {
  default
    let x;
}
```

### Diagnostics

```javascript
✔ No errors
```

