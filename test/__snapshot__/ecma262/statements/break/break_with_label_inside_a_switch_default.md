# Kataw parser test case

## Input

`````js
foo: switch (x) { default: break foo; }
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 163,
            "label": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 96,
                "transformFlags": 0,
                "start": 0,
                "end": 3
            },
            "colonToken": {
                "kind": 21,
                "flags": 64,
                "transformFlags": 0,
                "start": 3,
                "end": 4
            },
            "statement": {
                "kind": 160,
                "switchKeyword": {
                    "kind": 37757024,
                    "flags": 80,
                    "transformFlags": 0,
                    "start": 4,
                    "end": 11
                },
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 13,
                    "end": 14
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
                                "start": 17,
                                "end": 25
                            },
                            "colonToken": {
                                "kind": 21,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 25,
                                "end": 26
                            },
                            "statements": [
                                {
                                    "kind": 150,
                                    "breakKeyword": {
                                        "kind": 37757005,
                                        "flags": 80,
                                        "transformFlags": 0,
                                        "start": 26,
                                        "end": 32
                                    },
                                    "label": {
                                        "kind": 134299649,
                                        "text": "foo",
                                        "rawText": "foo",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 32,
                                        "end": 36
                                    },
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 26,
                                    "end": 37
                                }
                            ],
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 17,
                            "end": 37
                        }
                    ],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 17,
                    "end": 37
                },
                "flags": 80,
                "transformFlags": 0,
                "start": 4,
                "end": 39
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 39
        }
    ],
    "isModule": false,
    "source": "foo: switch (x) { default: break foo; }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 39
}
```

### Printed

```javascript
foo:  switch (x) {
  default
    break  foo;
}
```

### Diagnostics

```javascript
✔ No errors
```

