# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
// unclosed
export * as "string;
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
                "flags": 81,
                "transformFlags": 0,
                "start": 0,
                "end": 18
            },
            "declaration": null,
            "namedExports": null,
            "exportFromClause": {
                "kind": 259,
                "asteriskToken": {
                    "kind": 67143222,
                    "flags": 64,
                    "transformFlags": 32,
                    "start": 18,
                    "end": 20
                },
                "asKeyword": {
                    "kind": 16494,
                    "flags": 80,
                    "transformFlags": 0,
                    "start": 20,
                    "end": 23
                },
                "moduleExportName": {
                    "kind": 201392131,
                    "text": "string;",
                    "rawText": "\"string;",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 23,
                    "end": 32
                },
                "namedBinding": null,
                "flags": 0,
                "transformFlags": 0,
                "start": 0,
                "end": 32
            },
            "fromClause": {
                "kind": 325,
                "fromKeyword": null,
                "from": {
                    "kind": 16637,
                    "text": "",
                    "rawText": "",
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 32,
                    "end": 32
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 32,
                "end": 32
            },
            "exportKind": 0,
            "flags": 81,
            "transformFlags": 0,
            "start": 0,
            "end": 32
        }
    ],
    "isModule": true,
    "source": "// unclosed\nexport * as \"string;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 32
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Unterminated string literal - start: 23, end: 32
✖ Identifier expected - start: 32, end: 32

```

