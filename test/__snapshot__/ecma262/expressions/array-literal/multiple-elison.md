# Kataw parser test case

## Input

`````js
[a,,,,,,,,,b]
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
            "kind": 120,
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 1,
                            "end": 2
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 3,
                            "end": 3
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 4,
                            "end": 4
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 5,
                            "end": 5
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 6,
                            "end": 6
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 7,
                            "end": 7
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 8,
                            "end": 8
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 9,
                            "end": 9
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 10,
                            "end": 10
                        },
                        {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "start": 11,
                            "end": 12
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 1,
                    "end": 12
                },
                "flags": 32,
                "start": 0,
                "end": 13
            },
            "flags": 16,
            "start": 0,
            "end": 13
        }
    ],
    "isModule": false,
    "source": "[a,,,,,,,,,b]",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 13
}
```

### Printed

```javascript

  [a, , , , , , , , , b,];

```

### Diagnostics

```javascript
✔ No errors
```

