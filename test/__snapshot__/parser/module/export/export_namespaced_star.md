# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
export * as x from "x" foo
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 257,
            "exportKeyword": {
                "kind": 4202582,
                "flags": 80,
                "start": 0,
                "end": 6
            },
            "declaration": null,
            "namedExports": null,
            "exportFromClause": {
                "kind": 259,
                "asteriskToken": {
                    "kind": 67143222,
                    "flags": 64,
                    "start": 6,
                    "end": 8
                },
                "asKeyword": {
                    "kind": 16494,
                    "flags": 64,
                    "start": 8,
                    "end": 11
                },
                "moduleExportName": null,
                "namedBinding": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 11,
                    "end": 13
                },
                "flags": 0,
                "start": 0,
                "end": 13
            },
            "fromClause": {
                "kind": 256,
                "fromKeyword": {
                    "kind": 16500,
                    "flags": 64,
                    "start": 13,
                    "end": 18
                },
                "from": {
                    "kind": 201392131,
                    "text": "x",
                    "rawText": "\"x\"",
                    "flags": 96,
                    "start": 18,
                    "end": 22
                },
                "flags": 0,
                "start": 13,
                "end": 22
            },
            "exportKind": 0,
            "flags": 16,
            "start": 0,
            "end": 22
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 96,
                "start": 22,
                "end": 26
            },
            "flags": 16,
            "start": 22,
            "end": 26
        }
    ],
    "isModule": true,
    "source": "export * as x from \"x\" foo",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 26
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a `;` - start: 22, end: 26

```

