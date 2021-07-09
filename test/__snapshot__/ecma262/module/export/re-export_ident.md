# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
export * from x
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
                "transformFlags": 0,
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
                    "transformFlags": 32,
                    "start": 6,
                    "end": 8
                },
                "asKeyword": null,
                "moduleExportName": null,
                "namedBinding": null,
                "flags": 0,
                "transformFlags": 0,
                "start": 0,
                "end": 8
            },
            "fromClause": {
                "kind": 325,
                "fromKeyword": {
                    "kind": 16500,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 13
                },
                "from": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 13,
                    "end": 15
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 8,
                "end": 15
            },
            "exportKind": 0,
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 15
        }
    ],
    "isModule": true,
    "source": "export * from x",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 15
}
```

### Printed

```javascript
export *  from x;;
```

### Diagnostics

```javascript
✔ No errors
```

