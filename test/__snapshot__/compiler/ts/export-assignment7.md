# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true, module: true }
`````

## Input

`````js
export class C {
}

export = B;
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 149,
    "source": "export class C {\n}\n\nexport = B;",
    "filename": "",
    "moduleBody": {
        "kind": 150,
        "statements": [
            {
                "kind": 76,
                "declaration": {
                    "kind": 48,
                    "name": {
                        "kind": 131102,
                        "text": "C",
                        "rawText": "C",
                        "flags": 65536,
                        "intersects": false,
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
                        "flags": 81920,
                        "intersects": false,
                        "transformFlags": 1,
                        "start": 16,
                        "end": 18
                    },
                    "decorators": null,
                    "flags": 81920,
                    "intersects": false,
                    "transformFlags": 1,
                    "start": 6,
                    "end": 18
                },
                "namedExports": null,
                "exportFromClause": null,
                "fromClause": null,
                "isTypeOnly": false,
                "flags": 81920,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 18
            },
            {
                "kind": 8267,
                "expression": {
                    "kind": 196712,
                    "text": "B",
                    "rawText": "B",
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 28,
                    "end": 30
                },
                "flags": 65536,
                "intersects": false,
                "transformFlags": 0,
                "start": 26,
                "end": 31
            }
        ],
        "transformFlags": 0,
        "flags": 65536,
        "intersects": false,
        "start": 0,
        "end": 31
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 31
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

