# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
export let x, y
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
            "declaration": {
                "kind": 162,
                "lexicalKeyword": {
                    "kind": 41951307,
                    "flags": 80,
                    "transformFlags": 0,
                    "start": 6,
                    "end": 10
                },
                "binding": {
                    "kind": 151,
                    "bindingList": [
                        {
                            "kind": 190,
                            "binding": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 10,
                                "end": 12
                            },
                            "type": null,
                            "initializer": null,
                            "flags": 16,
                            "transformFlags": 128,
                            "start": 10,
                            "end": 12
                        },
                        {
                            "kind": 190,
                            "binding": {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 13,
                                "end": 15
                            },
                            "type": null,
                            "initializer": null,
                            "flags": 16,
                            "transformFlags": 128,
                            "start": 13,
                            "end": 15
                        }
                    ],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 10,
                    "end": 15
                },
                "flags": 33554448,
                "transformFlags": 0,
                "start": 6,
                "end": 15
            },
            "namedExports": null,
            "exportFromClause": null,
            "fromClause": null,
            "exportKind": 0,
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 15
        }
    ],
    "isModule": true,
    "source": "export let x, y",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 15
}
```

### Printed

```javascript

export let x, y;
```

### Diagnostics

```javascript
✔ No errors
```

