# Kataw parser test case

## Input

`````js
for ({a: b.c} of d) e
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
                "flags": 0,
                "start": 0,
                "end": 3
            },
            "ofKeyword": {
                "kind": 16793717,
                "flags": 64,
                "start": 13,
                "end": 16
            },
            "initializer": {
                "kind": 220,
                "propertyList": {
                    "kind": 218,
                    "properties": [
                        {
                            "kind": 219,
                            "generatorToken": null,
                            "asyncKeyword": null,
                            "getKeyword": null,
                            "setKeyword": null,
                            "left": {
                                "kind": 129,
                                "member": {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": " b",
                                    "flags": 96,
                                    "start": 8,
                                    "end": 10
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "c",
                                    "rawText": "c",
                                    "flags": 96,
                                    "start": 11,
                                    "end": 12
                                },
                                "flags": 32,
                                "start": 6,
                                "end": 12
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 6,
                                "end": 7
                            },
                            "flags": 32,
                            "start": 6,
                            "end": 12
                        }
                    ],
                    "trailingComma": false,
                    "flags": 16,
                    "start": 6,
                    "end": 12
                },
                "flags": 32,
                "start": 5,
                "end": 13
            },
            "expression": {
                "kind": 134299649,
                "text": "d",
                "rawText": " d",
                "flags": 96,
                "start": 16,
                "end": 18
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 134299649,
                    "text": "e",
                    "rawText": " e",
                    "flags": 96,
                    "start": 19,
                    "end": 21
                },
                "flags": 16,
                "start": 19,
                "end": 21
            },
            "awaitKeyword": null,
            "flags": 16,
            "start": 0,
            "end": 21
        }
    ],
    "isModule": false,
    "source": "for ({a: b.c} of d) e",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 21
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

