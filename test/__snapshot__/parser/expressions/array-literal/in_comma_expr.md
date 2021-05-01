# Kataw parser test case

## Input

`````js
x, [foo, bar] = doo
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
            "kind": 120,
            "expression": {
                "kind": 132,
                "expressions": [
                    {
                        "kind": 134299649,
                        "original": "x",
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 0,
                        "end": 1
                    },
                    {
                        "kind": 125,
                        "left": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 134299649,
                                        "original": "foo",
                                        "text": "foo",
                                        "rawText": "foo",
                                        "flags": 96,
                                        "start": 4,
                                        "end": 7
                                    },
                                    {
                                        "kind": 134299649,
                                        "original": "bar",
                                        "text": "bar",
                                        "rawText": " bar",
                                        "flags": 96,
                                        "start": 8,
                                        "end": 12
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 4,
                                "end": 12
                            },
                            "flags": 32,
                            "start": 2,
                            "end": 13
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "flags": 64,
                            "start": 13,
                            "end": 15
                        },
                        "right": {
                            "kind": 134299649,
                            "original": "doo",
                            "text": "doo",
                            "rawText": " doo",
                            "flags": 96,
                            "start": 15,
                            "end": 19
                        },
                        "flags": 32,
                        "start": 2,
                        "end": 19
                    }
                ],
                "flags": 32,
                "start": 0,
                "end": 19
            },
            "flags": 16,
            "start": 0,
            "end": 19
        }
    ],
    "isModule": false,
    "source": "x, [foo, bar] = doo",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 19
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

