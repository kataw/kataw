# Kataw parser test case

## Input

`````js
for ({ eval = 0 } in [{}]) ;
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
            "kind": 166,
            "forKeyword": {
                "kind": 37757017,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "initializer": {
                "kind": 220,
                "propertyList": {
                    "kind": 218,
                    "properties": [
                        {
                            "kind": 301,
                            "left": {
                                "kind": 134299649,
                                "text": "eval",
                                "rawText": "eval",
                                "flags": 96,
                                "start": 6,
                                "end": 11
                            },
                            "right": {
                                "kind": 201392130,
                                "text": 0,
                                "rawText": "0",
                                "flags": 96,
                                "start": 13,
                                "end": 15
                            },
                            "flags": 32,
                            "start": 6,
                            "end": 15
                        }
                    ],
                    "trailingComma": false,
                    "flags": 16,
                    "start": 6,
                    "end": 15
                },
                "flags": 48,
                "start": 5,
                "end": 17
            },
            "inKeyword": {
                "kind": 21006388,
                "flags": 64,
                "start": 17,
                "end": 20
            },
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 23,
                                "end": 23
                            },
                            "flags": 48,
                            "start": 22,
                            "end": 24
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 22,
                    "end": 24
                },
                "flags": 32,
                "start": 20,
                "end": 25
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 26,
                "end": 28
            },
            "flags": 80,
            "start": 0,
            "end": 28
        }
    ],
    "isModule": false,
    "source": "for ({ eval = 0 } in [{}]) ;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 28
}
```

### Printed

```javascript

for ({ eval = 0 } in [{},])
  ;

```

### Diagnostics

```javascript
✔ No errors
```

