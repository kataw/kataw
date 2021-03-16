# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
export class x {} foo
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "export class x {} foo",
    "filename": "",
    "statements": [
        {
            "kind": 76,
            "declaration": {
                "kind": 48,
                "name": {
                    "kind": 131102,
                    "text": "x",
                    "rawText": "x",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 1025,
                    "start": 12,
                    "end": 14
                },
                "typeParameters": null,
                "classHeritage": null,
                "implementClauses": null,
                "members": {
                    "kind": 50,
                    "elements": [],
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 1,
                    "start": 16,
                    "end": 17
                },
                "decorators": null,
                "isAbstract": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 1,
                "start": 6,
                "end": 17
            },
            "namedExports": null,
            "exportFromClause": null,
            "fromClause": null,
            "isTypeOnly": false,
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 17
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 196712,
                "text": "foo",
                "rawText": "foo",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 17,
                "end": 21
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 17,
            "end": 21
        }
    ],
    "isModule": true,
    "printable": true,
    "diagnostics": [],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 21
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

