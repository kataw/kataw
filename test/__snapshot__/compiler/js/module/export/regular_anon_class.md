# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
export default class {} foo
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "export default class {} foo",
    "filename": "",
    "statements": [
        {
            "kind": 77,
            "declaration": {
                "kind": 48,
                "name": null,
                "typeParameters": null,
                "classHeritage": null,
                "implementClauses": null,
                "members": {
                    "kind": 50,
                    "elements": [],
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 1,
                    "start": 22,
                    "end": 23
                },
                "decorators": null,
                "isAbstract": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 1,
                "start": 14,
                "end": 23
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 23
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
                "start": 23,
                "end": 27
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 23,
            "end": 27
        }
    ],
    "isModule": true,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "The `export` keyword can only be used with the module goal",
            "start": 0,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 27
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

