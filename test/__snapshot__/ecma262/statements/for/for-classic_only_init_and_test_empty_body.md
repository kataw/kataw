# Kataw parser test case

## Input

`````js
for (a;b;);
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
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 96,
                "start": 5,
                "end": 6
            },
            "condition": null,
            "incrementor": {
                "kind": 134299649,
                "text": "b",
                "rawText": "b",
                "flags": 96,
                "start": 7,
                "end": 8
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 10,
                "end": 11
            },
            "flags": 80,
            "start": 0,
            "end": 11
        }
    ],
    "isModule": false,
    "source": "for (a;b;);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 11
}
```

### Printed

```javascript

for (a;; b)
  ;

```

### Diagnostics

```javascript
✔ No errors
```

