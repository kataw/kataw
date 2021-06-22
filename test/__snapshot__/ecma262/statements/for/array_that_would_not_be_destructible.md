# Kataw parser test case

## Input

`````js
for ([x + y];;);
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
                            "kind": 198,
                            "left": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 6,
                                "end": 7
                            },
                            "operatorToken": {
                                "kind": 99634,
                                "flags": 96,
                                "start": 7,
                                "end": 9
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 96,
                                "start": 9,
                                "end": 11
                            },
                            "flags": 32,
                            "start": 6,
                            "end": 11
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 6,
                    "end": 11
                },
                "flags": 32,
                "start": 5,
                "end": 12
            },
            "condition": null,
            "incrementor": null,
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 15,
                "end": 16
            },
            "flags": 80,
            "start": 0,
            "end": 16
        }
    ],
    "isModule": false,
    "source": "for ([x + y];;);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 16
}
```

### Printed

```javascript

for ([x + y]; ; );
```

### Diagnostics

```javascript
✔ No errors
```

