# Kataw parser test case

## Input

`````js
for ([x];;);
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
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "initializer": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 6,
                            "end": 7
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 6,
                    "end": 7
                },
                "flags": 32,
                "start": 5,
                "end": 8
            },
            "condition": null,
            "incrementor": null,
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 11,
                "end": 12
            },
            "flags": 80,
            "start": 0,
            "end": 12
        }
    ],
    "isModule": false,
    "source": "for ([x];;);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 12
}
```

### Printed

```javascript

for ([x]; ; );
```

### Diagnostics

```javascript
✔ No errors
```

