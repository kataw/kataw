# Kataw parser test case

## Input

`````js
switch (true) { case true: const x = 1; }
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
                "start": 0,
                "end": 6
            },
            "expression": {
                "kind": 24752947,
                "flags": 96,
                "start": 8,
                "end": 12
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [
                    {
                        "kind": 175,
                        "caseKeyword": {
                            "kind": 4194382,
                            "flags": 80,
                            "start": 15,
                            "end": 20
                        },
                        "expression": {
                            "kind": 24752947,
                            "flags": 96,
                            "start": 20,
                            "end": 25
                        },
                        "colonToken": {
                            "kind": 21,
                            "flags": 64,
                            "start": 25,
                            "end": 26
                        },
                        "statements": [
                            {
                                "kind": 162,
                                "lexicalKeyword": {
                                    "kind": 37757004,
                                    "flags": 80,
                                    "start": 26,
                                    "end": 32
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
                                                "start": 32,
                                                "end": 34
                                            },
                                            "type": null,
                                            "initializer": {
                                                "kind": 201392130,
                                                "text": 1,
                                                "rawText": "1",
                                                "flags": 96,
                                                "start": 36,
                                                "end": 38
                                            },
                                            "flags": 16,
                                            "start": 32,
                                            "end": 38
                                        }
                                    ],
                                    "flags": 16777232,
                                    "start": 32,
                                    "end": 38
                                },
                                "flags": 33554448,
                                "start": 26,
                                "end": 39
                            }
                        ],
                        "flags": 16,
                        "start": 15,
                        "end": 39
                    }
                ],
                "flags": 16,
                "start": 13,
                "end": 41
            },
            "flags": 80,
            "start": 0,
            "end": 41
        }
    ],
    "isModule": false,
    "source": "switch (true) { case true: const x = 1; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 41
}
```

### Printed

```javascript

switch(true) {
  case true:
    const x = 1;
}
```

### Diagnostics

```javascript
✔ No errors
```

