# Kataw parser test case

## Input

`````js
switch (true) { case true: let x; }
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
                                    "kind": 41951307,
                                    "flags": 80,
                                    "start": 26,
                                    "end": 30
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
                                                "start": 30,
                                                "end": 32
                                            },
                                            "type": null,
                                            "initializer": null,
                                            "flags": 16,
                                            "start": 30,
                                            "end": 32
                                        }
                                    ],
                                    "flags": 16,
                                    "start": 30,
                                    "end": 32
                                },
                                "flags": 33554448,
                                "start": 26,
                                "end": 33
                            }
                        ],
                        "flags": 16,
                        "start": 15,
                        "end": 33
                    }
                ],
                "flags": 16,
                "start": 15,
                "end": 33
            },
            "flags": 80,
            "start": 0,
            "end": 35
        }
    ],
    "isModule": false,
    "source": "switch (true) { case true: let x; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 35
}
```

### Printed

```javascript

switch (true) {
  case true: 
    let x;
}

```

### Diagnostics

```javascript
✔ No errors
```

