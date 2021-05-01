# Kataw parser test case

## Input

`````js
const {,} = obj;
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
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 0,
                "start": 0,
                "end": 5
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 7,
                                "end": 7
                            },
                            "flags": 32,
                            "start": 5,
                            "end": 7
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 5,
                        "end": 7
                    }
                ],
                "flags": 16777232,
                "start": 5,
                "end": 8
            },
            "flags": 33554448,
            "start": 0,
            "end": 8
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "obj",
                "rawText": " obj",
                "flags": 96,
                "start": 11,
                "end": 15
            },
            "flags": 16,
            "start": 11,
            "end": 16
        }
    ],
    "isModule": false,
    "source": "const {,} = obj;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 16
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Missing initializer in const declaration - start: 7, end: 8
✖ Statement expected - start: 8, end: 9
✖ Statement expected - start: 9, end: 11

```

