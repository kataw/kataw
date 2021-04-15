# Kataw parser test case

## Input

`````js
for (let a of b);
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
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
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
                "kind": 134299649,
                "text": "b",
                "rawText": "b",
                "flags": 768,
                "start": 13,
                "end": 15
            },
            "statement": {
                "kind": 168,
                "flags": 128,
                "start": 16,
                "end": 17
            },
            "awaitKeyword": null,
            "flags": 128,
            "start": 0,
            "end": 17
        }
    ],
    "isModule": false,
    "text": "for (let a of b);",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 17
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

