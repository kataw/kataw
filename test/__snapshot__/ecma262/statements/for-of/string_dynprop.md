# Kataw parser test case

## Input

`````js
for ("foo"[x] of c) d;
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
            "kind": 167,
            "forKeyword": {
                "kind": 37757017,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "awaitKeyword": null,
            "initializer": {
                "kind": 130,
                "member": {
                    "kind": 201392131,
                    "text": "foo",
                    "rawText": "\"foo\"",
                    "flags": 96,
                    "start": 5,
                    "end": 10
                },
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 11,
                    "end": 12
                },
                "flags": 536870944,
                "start": 5,
                "end": 13
            },
            "ofKeyword": {
                "kind": 16793717,
                "flags": 64,
                "start": 13,
                "end": 16
            },
            "expression": {
                "kind": 134299649,
                "text": "c",
                "rawText": "c",
                "flags": 96,
                "start": 16,
                "end": 18
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 134299649,
                    "text": "d",
                    "rawText": "d",
                    "flags": 96,
                    "start": 19,
                    "end": 21
                },
                "flags": 16,
                "start": 19,
                "end": 22
            },
            "flags": 80,
            "start": 0,
            "end": 22
        }
    ],
    "isModule": false,
    "source": "for (\"foo\"[x] of c) d;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 22
}
```

### Printed

```javascript

for ('"foo"'[x] of c)
  d;

```

### Diagnostics

```javascript
✔ No errors
```

