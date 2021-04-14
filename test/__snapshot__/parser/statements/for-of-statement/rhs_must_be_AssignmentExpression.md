# Kataw parser test case

## Input

`````js
for (let x of a,b) c
`````

## Options

### Parser Options

`````js
{}
`````

### Printer Options

`````js
{
  "tabWidth": 2,
  "printWidth": 80,
  "useTabs": false,
  "bracketSpacing": true
}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 167,
            "forKeyword": {
                "kind": 37757017,
                "flags": 768,
                "start": 0,
                "end": 3
            },
            "initializer": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 81921,
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 8,
                            "end": 10
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 128,
                        "start": 8,
                        "end": 10
                    }
                ],
                "flags": 128,
                "start": 8,
                "end": 10
            },
            "expression": {
                "kind": 81921,
                "text": "a",
                "rawText": "a",
                "flags": 768,
                "start": 13,
                "end": 15
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 132,
                    "expressions": [
                        {
                            "kind": 16637,
                            "text": "",
                            "autofix": 0,
                            "flags": 12,
                            "start": 15,
                            "end": 15
                        },
                        {
                            "kind": 81921,
                            "text": "b",
                            "rawText": "b",
                            "flags": 768,
                            "start": 16,
                            "end": 17
                        }
                    ],
                    "flags": 256,
                    "start": 15,
                    "end": 17
                },
                "flags": 128,
                "start": 15,
                "end": 17
            },
            "awaitKeyword": null,
            "flags": 128,
            "start": 0,
            "end": 17
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "text": "c",
                "rawText": "c",
                "flags": 768,
                "start": 18,
                "end": 20
            },
            "flags": 128,
            "start": 18,
            "end": 20
        }
    ],
    "isModule": false,
    "text": "for (let x of a,b) c",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 15,
            "end": 16
        },
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 15,
            "end": 16
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 17,
            "end": 18
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 17,
            "end": 18
        }
    ],
    "start": 0,
    "end": 20
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
@{x2714}@ No errors
```

