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
                "flags": 0,
                "start": 0,
                "end": 3
            },
            "initializer": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "r",
                            "rawText": "r",
                            "flags": 96,
                            "start": 8,
                            "end": 10
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 8,
                        "end": 10
                    }
                ],
                "flags": 16,
                "start": 8,
                "end": 10
            },
            "condition": null,
            "incrementor": {
                "kind": 198,
                "left": {
                    "kind": 16637,
                    "text": "",
                    "flags": 64,
                    "start": 10,
                    "end": 10
                },
                "operatorToken": {
                    "kind": 34622,
                    "flags": 64,
                    "start": 10,
                    "end": 13
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "start": 13,
                        "end": 15
                    },
                    "operatorToken": {
                        "kind": 21006388,
                        "flags": 64,
                        "start": 15,
                        "end": 18
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 18,
                        "end": 20
                    },
                    "flags": 32,
                    "start": 15,
                    "end": 20
                },
                "flags": 32,
                "start": 10,
                "end": 20
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 22,
                "end": 23
            },
            "flags": 16,
            "start": 0,
            "end": 23
        }
    ],
    "isModule": false,
    "source": "for (var r == y in x );",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 23
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ ',' expected - start: 10, end: 13
✖ Identifier expected - start: 10, end: 13

```

