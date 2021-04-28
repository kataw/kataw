# Kataw parser test case

## Input

`````js
for (var r == y in x );
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
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 0,
                "start": 0,
                "end": 3
            },
            "initializer": {
                "kind": 198,
                "left": {
                    "kind": 156,
                    "declarations": [
                        {
                            "kind": 157,
                            "binding": {
                                "kind": 134299649,
                                "text": "r",
                                "rawText": "r",
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
                "operatorToken": {
                    "kind": 34622,
                    "flags": 512,
                    "start": 10,
                    "end": 13
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 768,
                        "start": 13,
                        "end": 15
                    },
                    "operatorToken": {
                        "kind": 21006388,
                        "flags": 512,
                        "start": 15,
                        "end": 18
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 768,
                        "start": 18,
                        "end": 20
                    },
                    "flags": 256,
                    "start": 15,
                    "end": 20
                },
                "flags": 256,
                "start": 0,
                "end": 20
            },
            "condition": null,
            "incrementor": {
                "kind": 16637,
                "text": "",
                "flags": 12,
                "start": 20,
                "end": 20
            },
            "statement": {
                "kind": 168,
                "flags": 128,
                "start": 22,
                "end": 23
            },
            "flags": 128,
            "start": 0,
            "end": 23
        }
    ],
    "isModule": false,
    "text": "for (var r == y in x );",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 23
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ ',' expected - start: 10, end: 13
✖ Expression expected - start: 20, end: 22

```

