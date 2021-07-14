# Kataw parser test case

## Input

`````js
class x{}
/foo/g
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
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "transformFlags": 0,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 8
                },
                "flags": 7,
                "transformFlags": 0,
                "start": 32,
                "end": 9
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 9
        },
        {
            "kind": 120,
            "expression": {
                "kind": 371,
                "text": "/foo/g",
                "rawText": "/foo/g",
                "flags": 96,
                "transformFlags": 0,
                "start": 9,
                "end": 16
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 9,
            "end": 16
        }
    ],
    "isModule": false,
    "source": "class x{}\n/foo/g",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 16
}
```

### Printed

```javascript
class x {}
/foo/g;

```

### Diagnostics

```javascript
✔ No errors
```

