# Kataw parser test case

## Input

`````js
for (/foo/[x] in c) d;
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
                "transformFlags": 0,
                "start": 0,
                "end": 3
            },
            "initializer": {
                "kind": 130,
                "member": {
                    "kind": 371,
                    "text": "/foo/",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 5,
                    "end": 10
                },
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 11,
                    "end": 12
                },
                "flags": 536870944,
                "transformFlags": 4,
                "start": 5,
                "end": 13
            },
            "inKeyword": {
                "kind": 21006388,
                "flags": 64,
                "transformFlags": 0,
                "start": 13,
                "end": 16
            },
            "expression": {
                "kind": 134299649,
                "text": "c",
                "rawText": "c",
                "flags": 96,
                "transformFlags": 0,
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
                    "transformFlags": 0,
                    "start": 19,
                    "end": 21
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 19,
                "end": 22
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 22
        }
    ],
    "isModule": false,
    "source": "for (/foo/[x] in c) d;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 22
}
```

### Printed

```javascript

for (/foo/[x] in c) d;
```

### Diagnostics

```javascript
✔ No errors
```

