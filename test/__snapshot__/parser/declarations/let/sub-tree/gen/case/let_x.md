# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/declarations/let/sub-tree/autogen.md
- Path: kataw8/test\__snapshot__\parser\declarations\let\sub-tree\gen\case
> :: test: case
> :: case: let x
## Input

`````js
switch (a) { case b: let x }
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
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 96,
                "start": 8,
                "end": 9
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [
                    {
                        "kind": 175,
                        "caseKeyword": {
                            "kind": 4194382,
                            "flags": 80,
                            "start": 12,
                            "end": 17
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "start": 17,
                            "end": 19
                        },
                        "statements": [
                            {
                                "kind": 162,
                                "lexicalKeyword": {
                                    "kind": 41951307,
                                    "flags": 80,
                                    "start": 20,
                                    "end": 24
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
                                                "start": 24,
                                                "end": 26
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "flags": 16,
                                            "start": 24,
                                            "end": 26
                                        }
                                    ],
                                    "flags": 16,
                                    "start": 24,
                                    "end": 26
                                },
                                "flags": 33554448,
                                "start": 20,
                                "end": 26
                            }
                        ],
                        "flags": 16,
                        "start": 12,
                        "end": 26
                    }
                ],
                "flags": 16,
                "start": 10,
                "end": 28
            },
            "flags": 80,
            "start": 0,
            "end": 28
        }
    ],
    "isModule": false,
    "source": "switch (a) { case b: let x }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 28
}
```

### Printed

```javascript

switch(a) {
  case b:
    let x;
}
```

### Diagnostics

```javascript
✔ No errors
```

