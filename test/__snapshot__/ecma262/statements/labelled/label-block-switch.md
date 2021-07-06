# Kataw parser test case

## Input

`````js
a: { b: switch(x) {} }
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
                "text": "a",
                "rawText": "a",
                "flags": 96,
                "transformFlags": 0,
                "start": 0,
                "end": 1
            },
            "colonToken": {
                "kind": 21,
                "flags": 64,
                "transformFlags": 0,
                "start": 1,
                "end": 2
            },
            "statement": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [
                        {
                            "kind": 163,
                            "label": {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 4,
                                "end": 6
                            },
                            "colonToken": {
                                "kind": 21,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 6,
                                "end": 7
                            },
                            "statement": {
                                "kind": 160,
                                "switchKeyword": {
                                    "kind": 37757024,
                                    "flags": 80,
                                    "transformFlags": 0,
                                    "start": 7,
                                    "end": 14
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 15,
                                    "end": 16
                                },
                                "caseBlock": {
                                    "kind": 152,
                                    "clauses": [],
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 19,
                                    "end": 19
                                },
                                "flags": 80,
                                "transformFlags": 0,
                                "start": 7,
                                "end": 20
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 4,
                            "end": 20
                        }
                    ],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 4,
                    "end": 20
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 2,
                "end": 22
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 22
        }
    ],
    "isModule": false,
    "source": "a: { b: switch(x) {} }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 22
}
```

### Printed

```javascript

a:  {
  b:  switch (x) {}
}
```

### Diagnostics

```javascript
✔ No errors
```

