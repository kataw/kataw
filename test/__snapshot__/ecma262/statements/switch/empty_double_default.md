# Kataw parser test case

## Input

`````js
switch(x) { default: default: }
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
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 7,
                "end": 8
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [
                    {
                        "kind": 170,
                        "defaultKeyword": {
                            "kind": 4194387,
                            "flags": 80,
                            "start": 11,
                            "end": 19
                        },
                        "colonToken": {
                            "kind": 21,
                            "flags": 64,
                            "start": 19,
                            "end": 20
                        },
                        "statements": [],
                        "flags": 16,
                        "start": 11,
                        "end": 20
                    },
                    {
                        "kind": 170,
                        "defaultKeyword": {
                            "kind": 4194387,
                            "flags": 80,
                            "start": 20,
                            "end": 28
                        },
                        "colonToken": {
                            "kind": 21,
                            "flags": 64,
                            "start": 28,
                            "end": 29
                        },
                        "statements": [],
                        "flags": 16,
                        "start": 20,
                        "end": 29
                    }
                ],
                "flags": 16,
                "start": 11,
                "end": 29
            },
            "flags": 80,
            "start": 0,
            "end": 31
        }
    ],
    "isModule": false,
    "source": "switch(x) { default: default: }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 31
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ A 'default' clause cannot appear more than once in a 'switch' statement. - start: 28, end: 29

```

