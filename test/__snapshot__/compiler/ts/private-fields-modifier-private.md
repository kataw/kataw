 Kataw parser test case

## Input

`````js
class A {
  private #a;
}
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "class A {\n  private #a;\n}",
    "filename": "",
    "statements": [
        {
            "kind": 48,
            "name": {
                "kind": 131102,
                "text": "A",
                "rawText": "A",
                "flags": 0,
                "intersects": false,
                "transformFlags": 1025,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "classHeritage": null,
            "implementClauses": null,
            "members": {
                "kind": 50,
                "elements": [
                    {
                        "kind": 16468,
                        "key": {
                            "kind": 131252,
                            "text": "#a",
                            "rawText": "#a",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 524288,
                            "start": 19,
                            "end": 22
                        },
                        "isInKeyword": false,
                        "expression": null,
                        "isAbstract": false,
                        "isReadOnly": false,
                        "isOptional": false,
                        "exclamation": false,
                        "type": null,
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": {
                            "kind": 4194485,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 9,
                            "end": 19
                        },
                        "isStatic": false,
                        "flags": 32768,
                        "intersects": false,
                        "transformFlags": 524352,
                        "start": 9,
                        "end": 23
                    }
                ],
                "flags": 0,
                "intersects": false,
                "transformFlags": 1,
                "start": 9,
                "end": 25
            },
            "decorators": null,
            "isAbstract": false,
            "flags": 0,
            "intersects": false,
            "transformFlags": 1,
            "start": 0,
            "end": 25
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [],
    "intersects": false,
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 25
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

